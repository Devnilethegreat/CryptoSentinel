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
  private threshold: number;

  constructor(threshold: number = 0.75) {
    this.threshold = threshold;
  }

  score(value: number, velocity: number, count: number): number {
    const vSig = Math.min(value / 1_000_000, 1.0);
    const velSig = Math.min(velocity / 500, 1.0);
    const cntSig = Math.min(count / 100, 1.0);
    return vSig * 0.5 + velSig * 0.3 + cntSig * 0.2;
  }

  process(data: ProcessData): ProcessResult {
    const sc = this.score(data.value, data.velocity, data.count);
    return { score: sc, flagged: sc >= this.threshold, threshold: this.threshold };
  }
