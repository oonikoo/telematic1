import { pbkdf2Sync, randomBytes} from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
    private readonly hashAlgorithm: string = 'sha512';
    private readonly outputEncoding: string = 'hex';

    private getHash(password: string, salt: string) {
        // Generate Hash using Password based key derivative function (PBKDF2)
        return pbkdf2Sync(password, salt, 2048, 32, this.hashAlgorithm)
            .toString(this.outputEncoding);
    }

    public hashPassword(password: string) {
        const salt = randomBytes(32).toString(this.outputEncoding);
        const hash = this.getHash(password, salt);
        // Return the salt + hash of the password
        return {salt, hash};
    }

    public checkPassword(originalHash: string, salt: string, candidatePassword: string) {
        const hash = this.getHash(candidatePassword, salt);
        return (hash === originalHash);
    }
}
