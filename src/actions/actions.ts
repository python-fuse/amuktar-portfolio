"use server";

import fs from "fs";
import data from "@/data/database.json";

export const getData = async () => {
  return data;
};
