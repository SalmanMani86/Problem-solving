function anagram(s,t){
    s=s.split('').sort().join('');
    t=t.split('').sort().join('');
    console.log(s);
    console.log(t);
    if(s===t){
        return true;
    }
    else{
        return false;
    }
}

console.log(anagram("anagram","nagwaram"));