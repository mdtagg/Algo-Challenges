

const simplifyPath = (path) => {

    let stack = []
    let pathArr = path.split("/")

    for(let i = 0;i < pathArr.length;i++) {
        if(pathArr[i] === '.' || !pathArr[i]) continue;

        else if(pathArr[i] === "..") {
            if(stack.length > 0) {
                stack.pop()
            }
        }else {
            stack.push(pathArr[i])
        }
    }
    return "/" + stack.join('/')

}

const testCases = [
    "/a/../../b/../c//.//",
    "/home/user/Documents/../Pictures",
    "/../home/user/Documents",
    "/home/user/../../usr/local/bin",
    "/home/user/./Downloads/../Pictures/././",
    "/home/user/Documents/../../usr/local/bin",
    "/home/user/Documents/../../../usr/local/bin"
]

simplifyPath(testCases[0])

/*

let stack = ["/"]
    let directoryName = ""

    if(path[0] !== "/") {
        stack.unshift("/");
        path = "/" + path
    }

    for(let i = 1;i < path.length;i++) {
        if(path[i] === "/") {
            if(directoryName === "..") {
                let slashCount = 2
                while(slashCount > 0) {
                    let char = stack.pop()
                    if(char === "/") slashCount--;
                }
            }
            if(directoryName !== "") directoryName = ""

        }else {
            directoryName += path[i]
        }
        stack.push(path[i])

    }
    console.log(stack.join(""))

while(left < path.length - 1) {
        if(path[i] === "/") {
            if(!stack.length) stack.push("/");
            else {
                
            }
        }
        else directoryName += path[i]
    }

const stack = []
    let result = "/"
    let directoryIdx = 0

    if(path[0] !== "/") stack.unshift("/");

    for(let i = 0;i < path.length;i++) {
        
        if(path[i] === "/") {
            while(path[i] === "/" && stack[stack.length - 1] === "/") {
                stack.pop()
                i++;
            }
        }
        result += path[i]
    }
*/