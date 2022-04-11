import { SALT_KEY } from '@config'
import { pbkdf2Sync } from 'crypto'

export function hashString(plainText: string): string {
  const hash = pbkdf2Sync(plainText, SALT_KEY, 10000, 64, 'sha512')
  return hash.toString('hex')
}

export function compareHash(plaintText: string, hashText: string): boolean {
  const hash = hashString(plaintText)
  return hash === hashText
}
