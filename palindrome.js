var p = s => { for (let i = 0; i < s.length; i++) { if (s[i] === s[s.length-1-i]) { continue; } return false; } return true; };
