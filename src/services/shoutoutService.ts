import axios from "axios";
import Shoutout from "../models/Shoutout";

const baseURL: string = process.env.REACT_APP_API_URL || "";

// service for get all
export const getShoutouts = async (): Promise<Shoutout[]> => {
  return (await axios.get(`${baseURL}/shoutouts`)).data;
};

// service for get one
export const getOneShoutout = async (_id: string): Promise<Shoutout> => {
  return (await axios.get(`${baseURL}/shoutouts/${encodeURIComponent(_id)}`))
    .data;
};

// service for post, or add shoutout
export const addShoutout = async (shoutout: Shoutout): Promise<Shoutout> => {
  return (await axios.post(`${baseURL}/shoutouts`, shoutout)).data;
};

// gets shoutouts by name
export const getShoutoutsByName = async (name: string): Promise<Shoutout[]> => {
  return (await axios.get(`${baseURL}/shoutouts/${encodeURIComponent(name)}`))
    .data;
};

// delete one shoutout
export const deleteShoutout = async (id: string): Promise<void> => {
  await axios.delete(`${baseURL}/shoutouts/${encodeURIComponent(id)}`);
};
