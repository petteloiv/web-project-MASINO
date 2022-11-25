a = {'0':[1]}

for i in range(2):
    if a.get(f'{i}'):
        a.get(f'{i}').append(i*1000)
    else:
        a[f'{i}'] = [i*100]
print(a)
# print(a.get(f'{i}'))

for A in a:
    print(A)