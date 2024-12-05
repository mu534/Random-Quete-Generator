
    let quetes = 
    [  `– Linus Torvalds
        'Talk is cheap. Show me the code.'
        `,
        `– Harold Abelson
        "Programs must be written for people to read, and only incidentally for machines to execute."`,

        `– Martin Fowler
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."`,
        `– C.A.R. Hoare
        "The most important property of a program is whether it accomplishes the intention of its user."`,
        `– John Johnson
        "First, solve the problem. Then, write the code."`,
        `– Rich Hickey
        "Programming is not about typing, it's about thinking."`,
        `– Grady Booch
        "The function of good software is to make the complex appear simple.",`,
        `"The best way to get a project done faster is to start sooner."
        – Jim Highsmith`,
        `"Code is like humor. When you have to explain it, it’s bad."
        – Cory House`,
        `
        "Experience is the name everyone gives to their mistakes."
        – Oscar Wilde (applicable to debugging!)`,
        `
        "Fix the cause, not the symptom."
        – Steve Maguire`,
        ` 
        "Before software can be reusable it first has to be usable."
        – Ralph Johnson`,
        ` "Programming isn't about what you know; it's about what you can figure out."
        – Chris Pine`,
        `"Sometimes it’s better to leave something alone, to pause, and that’s very true of programming."
        – Joyce Wheeler`,
        `
        "Code never lies, comments sometimes do."
        – Ron Jeffries
        `,
    ];

    generateQuete = () => {
    const randomIndex = Math.floor( Math.random() * quetes.length );
    document.getElementById('quete').
    textContent = quetes[randomIndex]
}

