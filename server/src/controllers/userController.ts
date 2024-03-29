import { Request, Response } from "express";

import { User } from "../entity/user.entity";
import { Company } from "../entity/company.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { myDataSource } from "../configs/app-data-source";
import { Student } from "../entity/student.entity";

require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }
  try {
    const userRepository = myDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    if (password != user.password) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      String(SECRET_KEY),
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: `Welcome ${user.email}`,
      token,
      userId: user.id,
      role: user.role,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const profile = async (req: Request, res: Response) => {
  const userId = req.userId;
  try {
    const userRepository = myDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: Number(userId) },
    });
    if (!user) {
      res.status(404).json({ success: false, message: "User not Found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error("Profile Error : ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
export const registerCompany = async (req: Request, res: Response) => {
  try {
    const userRepository = myDataSource.getRepository(User);
    const companyRepository = myDataSource.getRepository(Company);
    const { email, password, companyName, companyAddress, companyDescription } =
      req.body;
    const existingEmail = await userRepository.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists." });
    }
    const user = new User();
    user.email = email;
    user.password = password;
    user.role = "company";
    const newUser = await userRepository.save(user);
    const company = new Company();
    company.companyName = companyName;
    company.companyAddress = companyAddress;
    company.companyDescription = companyDescription;
    company.user = newUser;
    await companyRepository.save(company);
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error registering user (role company)" });
  }
};
export const registerStudent = async (req: Request, res: Response) => {
  try {
    const userRepository = myDataSource.getRepository(User);
    const studentRepository = myDataSource.getRepository(Student);
    const {
      email,
      password,
      studentName,
      studentSchool,
      sutendAddress,
      studentDescription,
    } = req.body;
    const existingEmail = await userRepository.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists." });
    }
    const user = new User();
    user.email = email;
    user.password = password;
    user.role = "student";
    const newUser = await userRepository.save(user);
    const student = new Student();
    student.StudentName = studentName;
    student.StudentSchool = studentSchool;
    student.StudentAddress = sutendAddress;
    student.studentDescription = studentDescription;
    student.user = newUser;
    await studentRepository.save(student);
    res.status(201).json({ message: "Success", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error registering user (role student)" });
  }
};
