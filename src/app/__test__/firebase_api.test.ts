import { UserInterface } from '../api/firebase_api'
import { UserCredential } from 'firebase/auth'
//@ts-ignore
import { expect, test } from 'bun:test'
import { SignUpWithEmail, SignInWithEmail } from '../api/firebase_api'

class TestUser implements UserInterface {
  private isExist

  constructor(isExist: boolean) {
    this.isExist = isExist
  }

  async IsExist(): Promise<boolean> {
    return this.isExist
  }

  async SignUp(): Promise<UserCredential> {
    const userCredential: UserCredential = {
      user: Object.create(null),
      providerId: Object.create(null),
      operationType: Object.create(null),
    }
    return userCredential
  }

  async SignIn(): Promise<UserCredential> {
    const userCredential: UserCredential = {
      user: Object.create(null),
      providerId: Object.create(null),
      operationType: Object.create(null),
    }
    return userCredential
  }
}

//新規登録に成功するためのテスト
test('signup success', (done: () => void) => {
  const testUser = new TestUser(false)
  const userCredential: UserCredential = {
    user: Object.create(null),
    providerId: Object.create(null),
    operationType: Object.create(null),
  }
  Promise.resolve(SignUpWithEmail(testUser)).then((result) => {
    expect(result).toEqual(userCredential)
    done()
  })
})

//新規登録に失敗するためのテスト すでにemailが存在しているなど
test('signup failed', (done: () => void) => {
  const testUser = new TestUser(true)
  Promise.resolve(SignUpWithEmail(testUser)).then((result) => {
    expect(result).toEqual(null)
    done()
  })
})

//ログインに成功するためのテスト
test('signin success', (done: () => void) => {
  const testUser = new TestUser(true)
  const userCredential: UserCredential = {
    user: Object.create(null),
    providerId: Object.create(null),
    operationType: Object.create(null),
  }
  Promise.resolve(SignInWithEmail(testUser)).then((result) => {
    expect(result).toEqual(userCredential)
    done()
  })
})

//ログインに失敗するためのテスト emailが存在しないなど
test('signin failed', (done: () => void) => {
  const testUser = new TestUser(false)
  Promise.resolve(SignInWithEmail(testUser)).then((result) => {
    expect(result).toEqual(null)
    done()
  })
})
