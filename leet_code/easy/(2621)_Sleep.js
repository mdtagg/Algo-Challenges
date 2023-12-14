

const sleep = async(millis) => {
    await new Promise(resolve => setTimeout(resolve,millis))
}

sleep(100)