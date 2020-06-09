document.querySelectorAll('.quiz-one-btn').forEach(btn => {
    btn.onclick = () => {
        glass.classList.add('active')
        if (btn.classList.contains('success')) {
            btn.className = 'btn btn-success success'
            successCountText.innerText++
        } else btn.className = 'btn btn-danger'
        
        setTimeout(() => {
            quizOne.classList.add('hidden')
            quizTwo.classList.remove('hidden')
            glass.classList.remove('active')
            quizCount.innerText++
        }, 1500)
    }
})

document.querySelectorAll('.quiz-two-btn').forEach(btn => {
    btn.onclick = () => {
        glass.classList.add('active')
        if (btn.classList.contains('success')) {
            btn.className = 'btn btn-success success'
            successCountText.innerText++
        } else btn.className = 'btn btn-danger'

        setTimeout(() => {
            quizTwo.classList.add('hidden')
            quizThree.classList.remove('hidden')
            glass.classList.remove('active')
            quizCount.innerText++
        }, 1500)
    }
})

document.querySelectorAll('.quiz-three-btn').forEach(btn => {
    btn.onclick = () => {
        glass.classList.add('active')
        if (btn.classList.contains('success')) {
            btn.className = 'btn btn-success success'
            successCountText.innerText++
        } else btn.className = 'btn btn-danger'

        setTimeout(() => {
            quizThree.classList.add('hidden')
            quizEnd.classList.remove('hidden')
            glass.classList.remove('active')
            document.querySelector('.count-quiz').style.display = 'none'
        }, 1500)
    }
})