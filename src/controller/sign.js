import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import User from "../models/user";
import bcryptjs from "bcryptjs";

const signupSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Truong name la bat buoc",
    "string.empty": "TRuong name khong duoc de trong",
    "string.min": "truong name phai co it nhat {#limit} ki tu",
    "string.max": "truong name khong vuot qua  {#limit} ki tu",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Truong email la bat buoc",
    "string.empty": "TRuong email khong duoc de trong",
    "string.email": "truong email khong hop le",
  }),
  password: Joi.string().min(6).max(30).required().messages({
    "any.required": "Truong password la bat buoc",
    "string.empty": "TRuong password khong duoc de trong",
    "string.min": "truong password phai co it nhat {#limit} ki tu",
    "string.max": "truong password khong vuot qua  {#limit} ki tu",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": "truong confirmPassword la bat buoc",
    "any.only": "mat khau khong trung khop",
  }),
  avatar: Joi.string().uri().message({
    "string.uri": "avatar khong hop le",
  }),
});

// kiem tra req
export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  const { error } = signupSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((item) => item.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      messages,
    });
  }

  // kiem tra tai khoan ton tai hay chua
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      messages: ["Email da ton tai"],
    });
  }
  // ma hoa mat khau
  const hashedPassword = await bcryptjs.hash(password, 10);
};

export const signin = async (req, res) => {};
export const logout = async (req, res) => {};
