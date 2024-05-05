export async function findUserByEmail(db, email) {
  try {
    const { data: user, error } = await db.from('users').select('*').eq('email', email).single();

    if (error) {
      console.error('Error findUserByEmail:', error.message);
      return null;
    }

    return user;
  } catch {
    return null;
  }
}
import { supabase } from './supabaseClient';

// Create a new user
export async function createUser(email, firstName, lastName, company, role) {
  const { data, error } = await supabase.from('users').insert([{ email, first_name: firstName, last_name: lastName, company, role }]);

  if (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }

  return data[0];
}

// Read users
export async function getUsers() {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }

  return data;
}

// Update a user
export async function updateUser(email, updates) {
  const { data, error } = await supabase.from('users').update(updates).eq('email', email).single();

  if (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }

  return data;
}

// Delete a user
export async function deleteUser(email) {
  const { data, error } = await supabase.from('users').delete().eq('email', email).single();

  if (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }

  return data;
}
