import { createSelector } from 'reselect'

const movSelector = state => state.groups
const selectedMovSelector = state => state.findMovWord

const getMov = (groups,findMovWord) => {
    console.log(findMovWord)
    if (findMovWord===''||findMovWord===null){
        return groups    
    } else {
        const selectedMovs = groups.filter (
            group => group.title.toLowerCase().includes(findMovWord.toLowerCase())
        )
        return selectedMovs
    }
}

export default createSelector (
    movSelector,
    selectedMovSelector,
    getMov
)