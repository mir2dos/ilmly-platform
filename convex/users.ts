import { getAuthUserId } from "@convex-dev/auth/server";

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { DataModel } from "./_generated/dataModel";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return null;

    return await ctx.db.get(userId);
  },
});

export const updateProfile = mutation({
  args: {
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    phone: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return null;

    const updatedValues: Partial<DataModel["users"]["document"]> = {};

    if (args.name) updatedValues.name = args.name;
    if (args.image) updatedValues.image = args.image;
    if (args.phone) updatedValues.phone = args.phone;

    if (Object.keys(updatedValues).length === 0) {
      return { success: false, message: "No fields provided for update." };
    }

    await ctx.db.patch(userId, updatedValues);

    return { success: true, message: "Profile updated successfully." };
  },
});
