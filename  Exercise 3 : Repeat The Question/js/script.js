let checker = true;

while(checker)
{
    entry = prompt('Entrer un nombre');

    type = typeof(entry);

    console.log(type);

    number = Number(entry);

    if(!isNaN(number) && number > 10 )
    {
        break;
    }
}