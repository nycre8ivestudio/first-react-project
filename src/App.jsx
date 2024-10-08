const App = () => {
  let heroData = [
    {text1: 'Dive into', text2: 'what you love'},
    {text1: 'Indulge', text2: 'your passions'},
    {text1: 'Give into', text2: 'your cravings'},
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App