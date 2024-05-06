import { supabase as db } from './supabaseClient';

// Create a new demo request
export async function createDemoRequest(email, firstName, lastName, company) {
  const { data, error } = await db.from('demo-request').insert([{ email, first_name: firstName, last_name: lastName, company }]);

  if (error) {
    console.error('Error creating demo request:', error.message);
    throw error;
  }
}

// Read demo requests
export async function checkPending(email) {
  const { data, error } = await db.from('demo-request').select('*').eq('email', email);
  if (error) {
    console.error('Error fetching demo requests:', error.message);
    throw error;
  }
  if (data.length > 0) {
    return true;
  } else {
    return false;
  }
}

// Read demo requests
export async function getDemoRequests() {
  const { data, error } = await db.from('demo-request').select('*');

  if (error) {
    console.error('Error fetching demo requests:', error.message);
    throw error;
  }

  return data;
}

// Update a demo request
export async function updateDemoRequest(email, updates) {
  const { data, error } = await db.from('demo-request').update(updates).eq('email', email).single();

  if (error) {
    console.error('Error updating demo request:', error.message);
    throw error;
  }

  return data;
}

// Delete a demo request
export async function deleteDemoRequest(email) {
  const { data, error } = await db.from('demo-request').delete().eq('email', email).single();

  if (error) {
    console.error('Error deleting demo request:', error.message);
    throw error;
  }

  return data;
}
