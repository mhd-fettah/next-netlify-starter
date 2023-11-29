import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Test haista landing
        </p>
      </main>

  <div class="feedback-form">
    <form
      netlify
      netlify-honeypot
      name="feedback"
      method="POST"
      action="/success"
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="feedback" />
      <label for="name">Name</label>
      <input id="name" type="text" name="name" />
      <label for="email">Email</label>
      <input id="email" type="email" name="email" required />
      <label for="feedback">What is your feedback?</label>
      <textarea id="feedback" wrap="soft" name="feedback" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>

      <Footer />
    </div>
  )
}
