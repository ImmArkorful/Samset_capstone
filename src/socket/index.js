import { io } from "socket.io-client";
import { TEST_URL } from "../constants/ApplicationConstants";

export const socket = io(TEST_URL);
