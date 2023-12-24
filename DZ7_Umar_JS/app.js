//////////1
const numbers = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7];
    console.log(numbers.map((number) =>number*5));
    console.log(numbers.filter((number) => number > 0));

    let max = numbers.reduce((firstElement, secondElement) =>
        firstElement > secondElement ? firstElement: secondElement);
    console.log(max);
    let min = numbers.reduce((firstElement, secondElement) =>
        firstElement<secondElement ? firstElement: secondElement)
    console.log(min);

 ///////////2
const capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

const name = ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"];
console.log(name.map((name)=>capitalize(name)));
function translit(word){
    var answer = '';
    var converter = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
        'э': 'e',    'ю': 'yu',   'я': 'ya',

        'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
        'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
        'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
        'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
        'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
        'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
        'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    };

    for (var i = 0; i < word.length; ++i ) {
        if (converter[word[i]] === undefined){
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }

    return answer;
}

console.log(name.map((name)=>translit(name)));
console.log(name.filter((name)=> name.startsWith('а')));
console.log(name.reduce((longest, name)=>
    longest.length> name.length ? longest : name));
console.log(name.reduce((shortest, name)=>
    shortest.length< name.length ? shortest : name));

