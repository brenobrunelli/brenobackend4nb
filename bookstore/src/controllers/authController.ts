import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';
import { AuthService } from '../services/authService';

const authService = new AuthService();
const userRepository = new UserRepository();

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "Erro" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.loginUser(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: "Erro" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error('Erro ao obter usuários:', err); 
    res.status(500).json({ error: 'Erro ao obter usuários.' }); 
  }
};
