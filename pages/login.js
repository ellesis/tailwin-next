import React from 'react'
import Layout from '../layout/layout'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Form.module.css'

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="test-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">Explore our web site!</p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} />
          </div>
          <div className={styles.input_group}>
            <input type="password" name="password" placeholder="password" className={styles.input_text} />
          </div>

          {/* login buttons */}
          <div className={styles.input_button}>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className={styles.input_button}>
            <button type="submit">Sign in with Google</button>
          </div>

          <div className={styles.input_button}>
            <button type="submit">Sign In with Github</button>
          </div>
        </form>
        {/* bottom */}
        <div className="next-center text-gray-400">
          You do not have an account yet?{' '}
          <Link href="/register">
            <a className="text-blue-700">Sing Up</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
