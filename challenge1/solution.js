function startsWithP(str) {
	return str.startsWith('P');
}

function startsWithNumber(str) {
	return /^\d/.test(str);
}

function solution(data) {
	const digitArr = [];
  const pArr = [];
  const otherArr = [];
  data.forEach(v => {
		if (startsWithNumber(v)) {
    	digitArr.push(v);
    } else if (startsWithP(v)) {
    	pArr.push(v);
    } else {
    	otherArr.push(v);
    }
  });

	digitArr.sort().reverse();
  pArr.sort().reverse();
  otherArr.sort();

  return [
		...digitArr,
    ...otherArr,
    ...pArr,
  ];
}
