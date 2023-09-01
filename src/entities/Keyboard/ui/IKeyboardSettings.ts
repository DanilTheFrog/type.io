import { IMaterialKeyProps } from "@/shared/UI/MaterialKeyButton/Buttons"


const NumRow: IMaterialKeyProps[] = [
    {
        value: "`",
        label: "`",
        color: 'black'
    },
    {
        value: "1",
        label: "1",
    },
    {
        value: "2",
        label: "2",
    },
    {
        value: "3",
        label: "3",
    },
    {
        value: "4",
        label: "4",
    },
    {
        value: "5",
        label: "5",
    },
    {
        value: "6",
        label: "6",
    },
    {
        value: "7",
        label: "7",
    },
    {
        value: "8",
        label: "8",
    },
    {
        value: "9",
        label: "9",
    },
    {
        value: "0",
        label: "0",
    },
    {
        value: "-",
        label: "-",
    },
    {
        value: "=",
        label: "=",
    },
    {
        color: 'black',
        value: "backspace",
        label: "←",
        type: 'backspace',
        textAlign: 'right'
    }
]

const EnKeys1Row:IMaterialKeyProps[] =   [
    {
        value: "tab",
        label: "Tab",
        type: 'tab',
        color: 'black',
        textAlign: 'left'
    },
    {
        value: "q",
        label: "Q",
    },
    {
        value: "w",
        label: "W",
    },
    {
        value: "e",
        label: "E",
    },
    {
        value: "r",
        label: "R",
    },
    {
        value: "t",
        label: "T",
    },
    {
        value: "y",
        label: "Y",
    },
    {
        value: "u",
        label: "U",
    },
    {
        value: "i",
        label: "I",
    },
    {
        value: "o",
        label: "O",
    },
    {
        value: "p",
        label: "P",
    },
    {
        value: "[",
        label: "[",
        color: 'black'
    },
    {
        value: "]",
        label: "]",
        color: 'black'
    },
    {
        value: "\\",
        label: "\\",
        color: 'black'
    }
]


const EnKeys2Row: IMaterialKeyProps[] = [
    {
        value: "caps",
        label: "Caps",
        type: 'caps',
        color: 'black',
    },
    {
        value: "a",
        label: "A",
    },
    {
        value: "s",
        label: "S",
    },
    {
        value: "d",
        label: "D",
    },
    {
        value: "f",
        label: "F",
    },
    {
        value: "g",
        label: "G",
    },
    {
        value: "h",
        label: "H",
    },
    {
        value: "j",
        label: "J",
    },
    {
        value: "k",
        label: "K",
    },
    {
        value: "l",
        label: "L",
    },
    {
        value: ";",
        label: ";",
    },
    {
        value: "'",
        label: "'",
    },
    {
        value: "enter",
        label: "Enter",
        type: 'enter',
        color: 'black',
        textAlign: 'right'
    }
]

const EnKeys3Row: IMaterialKeyProps[] = [
    {
        value: "shift",
        label: "Shift",
        type: 'leftShift',
        color: 'black',
        textAlign: 'left'
    },
    {
        value: "z",
        label: "Z",
    },
    {
        value: "x",
        label: "X",
    },
    {
        value: "c",
        label: "C",
    },
    {
        value: "v",
        label: "V",
    },
    {
        value: "b",
        label: "B",
    },
    {
        value: "n",
        label: "N",
    },
    {
        value: "m",
        label: "M",
    },
    {
        value: ",",
        label: ",",
    },
    {
        value: ".",
        label: ".",
    },
    {
        value: "/",
        label: "/",
        color: 'black'
    },
    {
        value: "shift",
        label: "Shift",
        type: 'rightShift',
        color: 'black',
        textAlign: 'right'
    }
]

export const EnUsKeys = [
    NumRow,
    EnKeys1Row,
    EnKeys2Row,
    EnKeys3Row
]