# Shifty ROT

A double keyed, running key Vigenere style cipher encoder/decoder just for fun.

## History

From: https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher

The running key variant of the Vigen�re cipher was also considered unbreakable at one time. This version uses as the key a block of text as long as the plaintext. Since the key is as long as the message, the Friedman and Kasiski tests no longer work, as the key is not repeated.

If multiple keys are used, the effective key length is the least common multiple of the lengths of the individual keys. For example, using the two keys GO and CAT, whose lengths are 2 and 3, one obtains an effective key length of 6 (the least common multiple of 2 and 3). This can be understood as the point where both keys line up.

Plaintext: 	ATTACKATDAWN
Key 1: 	    GOGOGOGOGOGO
Key 2: 	    CATCATCATCAT
Ciphertext: IHSQIRIHCQCU

## Security

Using short keys with a the basic 26 character alphabet, this can be cracked pretty easily. If the keys are longer, and prime to each other, security increases.

Additional security can be added by altering the alphabet, from [A-Z] to [a-zA-Z0-9] adds even more variability.  Switching to the complete set of printable ASCII will me this even more secure. Good cryptoanalysis however, should still be able to crack anything generated by this cipher, but it could take a while.

## Using

The web based form is pretty simple to use, just follow the instructions on screen.