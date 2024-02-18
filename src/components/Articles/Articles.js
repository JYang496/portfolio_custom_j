import './Articles.scss'
import {useParams} from "react-router-dom";

export const Articles = () => {
  const { articleId } = useParams();
  return <>
    <div className="page-title">{articleId}</div>
    <p className="content-meta">Feb 14, 2024</p>
    <article>
      <h2>Sub Title</h2>
      <p>The flibbertigibbet frolicked through the meadow, its wibbly-wobbly antics captivating the ethereal essence of a moonbeam's sigh. In the hinterlands of zephyr dreams, unicorns gambolled with polka-dotted leprechauns, while jellybeans hummed a tune of cosmic resonance. Meanwhile, the kaleidoscopic whirlwind pirouetted in a symphony of absurdity, serenading the quixotic musings of a sentient marshmallow. Thus, amidst the cacophony of whimsy and the maelstrom of nonsensical babble, the ineffable enigma of incongruity danced upon the precipice of oblivion, unfurling its enigmatic tapestry of utter perplexity.</p>
      <p>The purple banana danced softly on the moon while juggling rainbow-colored socks made of marshmallows and singing tunes from a forgotten dimension where clouds are made of cheese and raindrops taste like cotton candy.</p>
      <ol>
        <li>point one</li>
        <li>point two</li>
        <ul>
          <li>point one</li>
          <li>point two</li>
          <li>point three</li>
        </ul>
      </ol>
      <pre>
        <code>
          <span>
          git add .
          </span>
          <span>
          git commit -m ""
          </span>
          <span>
          git push
          </span>
        </code>
      </pre>
    </article>
  </>
}