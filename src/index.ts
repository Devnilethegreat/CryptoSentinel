// index.ts
import * as dotenv from 'dotenv';
dotenv.config();

interface ProcessData {
  value: number;
  velocity: number;
  count: number;
}

interface ProcessResult {
  score: number;
  flagged: boolean;
  threshold: number;
}

export class CryptoSentinelCore {
