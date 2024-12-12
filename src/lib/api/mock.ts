import { delay } from '../utils';

// Simulate a database
const USERS_KEY = 'loue_ton_2_roue_users';

interface StoredUser {
  id: string;
  email: string;
  username: string;
  password: string;
}

function getUsers(): StoredUser[] {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function mockRegister(data: { email: string; password: string; username: string }) {
  await delay(1000); // Simulate network delay

  const users = getUsers();
  
  // Check if email already exists
  if (users.some(user => user.email === data.email)) {
    throw new Error('Cet email est déjà utilisé');
  }

  // Check if username already exists
  if (users.some(user => user.username === data.username)) {
    throw new Error('Ce nom d\'utilisateur est déjà pris');
  }

  const newUser = {
    id: crypto.randomUUID(),
    email: data.email,
    username: data.username,
    password: data.password, // In a real app, this would be hashed
  };

  users.push(newUser);
  saveUsers(users);

  const { password, ...userWithoutPassword } = newUser;
  return {
    user: userWithoutPassword,
    token: `mock_token_${newUser.id}`,
  };
}

export async function mockLogin(email: string, password: string) {
  await delay(1000); // Simulate network delay

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    throw new Error('Email ou mot de passe incorrect');
  }

  const { password: _, ...userWithoutPassword } = user;
  return {
    user: userWithoutPassword,
    token: `mock_token_${user.id}`,
  };
}

export async function mockGetCurrentUser(token: string) {
  await delay(500); // Simulate network delay

  if (!token.startsWith('mock_token_')) {
    throw new Error('Token invalide');
  }

  const userId = token.replace('mock_token_', '');
  const users = getUsers();
  const user = users.find(u => u.id === userId);

  if (!user) {
    throw new Error('Utilisateur non trouvé');
  }

  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}