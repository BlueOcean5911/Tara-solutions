import { supabase } from './supabaseClient';

export async function findUserByEmail(email) {
  try {
    const {
      data: { user },
      error
    } = await supabase.from('users').select('*').eq('email', email).single();

    if (error) {
      console.error('Error findUserByEmail:', error.message);
      return null;
    }

    return user;
  } catch {
    return null;
  }
}

export async function checkUser(email) {
  try {
    const { data, error } = await supabase.from('users').select('*').eq('email', email);

    if (error) {
      console.error('Error findUserByEmail:', error.message);
      return null;
    }

    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch {
    return null;
  }
}

// Create a new user
export async function createUser(email, firstName, lastName, company, role = 'demo') {
  const { data, error } = await supabase.from('users').insert([{ email, first_name: firstName, last_name: lastName, company, role }]);

  if (error) {
    console.error('Error creating user:', error.message);
  }
  return data;
}

// Read users
export async function getUsers() {
  const { data, error } = await supabase.from('users').select('*');
  console.log('users', data);
  if (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }

  return data;
}

// Update a user
export async function updateUser(email, updates) {
  console.log('updating user', email, updates);
  const { data, error } = await supabase.from('users').update(updates).eq('email', email);

  if (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }

  return data;
}

// Delete a user
export async function deleteUser(email) {
  const { data, error } = await supabase.from('users').delete().eq('email', email);

  if (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }

  return data;
}
