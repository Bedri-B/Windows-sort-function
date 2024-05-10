def is_numeric(s):
    for char in s:
        try:
            num = int(char)
            if not num.isnumeric():
                return True
        except ValueError:
            print(char + " is not a number")
    return False

def split_num(s):
    s = str(s).lower()
    _string = []
    temp = ""
    num = False
    for char in s:
        if char.isnumeric():
            temp += char
            num = True
            continue
        else:
            if num:
                _string.append(temp)
                temp = ""
                num = False
            temp += char
        _string.append(temp)
        temp = ""
    if num:
        _string.append(temp)
    return _string

def sort_(a, b):
    a = split_num(a)
    b = split_num(b)
    al = len(a)
    bl = len(b)
    for i in range(min(al, bl)):
        if a[i].isnumeric() and b[i].isnumeric():
            if int(a[i]) != int(b[i]):
                return int(a[i]) < int(b[i])
        elif not a[i].isnumeric() and b[i].isnumeric():
            return False
        elif a[i].isnumeric() and not b[i].isnumeric():
            return True
        elif not a[i].isnumeric() and not b[i].isnumeric():
            if a[i] != b[i]:
                return a[i] < b[i]
    return True


def sort(a):
    a = split_num(a)
    length = len(a)
    lengthn = length + 1
    score = 0
    for i in range(length):
        x = i + 1
        val = int(a[i]) if a[i].isnumeric() else ord(a[i])
        score += (val * (lengthn - x))
    print("===========>Score: ", score, a)
    return score

def windows_sort(lst, reverse=False):
    return sorted(lst, key=lambda x: (sort(x), x), reverse=reverse)
