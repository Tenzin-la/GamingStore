import './Feed.css'
import announce from  '../images/announcement.avif'

export default function Feed() {
  return (
    <div className="feed">

      <img src={announce} alt="" />

      <h2>You may not want to miss out on these gems!</h2>

      <p>
        If you’re on the hunt for your next adventure, we’re here to help! <br />

        Below, we’ve gathered a list of notable games that may have slipped under your radar. Whether you have a go-to genre or want to try something a little different, each of these games stand out in their own way. <br />

        Happy gaming!
      </p>

      <h3 style={{color:'crimson'}}>Balatro</h3>
      <p>Get ready to flex your deck-building skills in this poker-inspired game where you’ll need to earn enough chips to progress. It’ll take all your skills (and a bit of luck) to ignite a combo frenzy and turbocharge your poker hands using different decks, special cards, and vouchers. Use every edge to reach the boss blind and secure victory!</p>

      <h3 style={{color:'crimson'}}> Ugly</h3>
      <p>In this dark and twisted fairytale, explore the desolated recesses of a tormented nobleman’s mind. Use the mirror mechanic to create a shadowy reflection of yourself to tackle challenging puzzle rooms and topple towering bosses. Untangle the cobwebs that obscure the past, but beware, sometimes the truth is ugly.</p>


    </div>
  )
}
