// TODO: Write Your JavaScript Code Here

var students = ['Sarah', 'Orlando', 'Ismael', 'Hung'];

//lenght of the array 
console.log(students.length)

//for loop starts at 0 runs while i is less than lenght of student arry
// i++ = increment by 1
for(var i = 0; i < students.length; i++)
{
    console.log('Great to see you, ' + students[i] + '!');

}

var i = 0;
while ( i < students.length)
{
    console.log('Great to see you, ' + students[i] + '!');
    i++;
}