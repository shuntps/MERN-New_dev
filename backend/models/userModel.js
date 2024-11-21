import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      avatar: {
         type: String,
      },
      lastLogin: {
         type: Date,
         default: Date.now,
      },
      isVerified: {
         type: Boolean,
         default: false,
      },
      resetPasswordToken: String,
      resetPasswordExpiresAt: Date,
      verificationToken: String,
      verificationExpiresAt: Date,
   },
   { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;