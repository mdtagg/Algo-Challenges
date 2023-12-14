

const addTwoPromises = async(promise1,promise2) => {
    const p1 = await promise1
    const p2 = await promise2

    return p1 + p2
}

const promise1 = new Promise(resolve => {
    setTimeout(() => resolve(2),20)
})

const promise2 = new Promise(resolve => {
    setTimeout(() => resolve(7),60)
})

addTwoPromises(promise1,promise2)