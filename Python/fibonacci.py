

def fib(n):
  # fibList = [0,1]
  # if(n <= 2): return fibList[n]

  # for x in range(2,n):
  #   currNum = fibList[len(fibList) - 1] + fibList[len(fibList) - 2] 
  #   fibList.append(currNum)
  
  # return fibList[len(fibList) - 1]

  if(n == 0): return 0
  elif(n == 1): return 1

  a,b = 0,1

  for _ in range(2,n + 1):
    a,b = b, a + b
  
  return b

print(fib(6))