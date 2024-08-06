
const LanguageFilterItem=(props)=>{
    const {getData, setActiveDetail}=props
    const {id, language}=getData
    // const {id, name, avatarUrl, forksCount, issuesCount, starsCount}= getData
    const onCLickEvent=()=>{
        setActiveDetail(id)
    }
    

    return(
        <li>
            <button onClick={onCLickEvent}>
            {language}
            </button>
            {/* <img src={avatarUrl} alt={name}/> */}
        </li>
    )



}
export default LanguageFilterItem