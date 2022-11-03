// 상태
export const state = {
  page: 0,
  questions: [
    {
      q: "팀프로젝트의 내용 전달은 어떤 방식을 선호하나요?",
      a: [{
        text: '대화를 통한 의사소통',
        value: "e"
      },{
        text: '문서를 통한 의사소통',
        value: "i"
      }]
    }
  ],
  result: {
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    t: 0,
    f: 0,
    p: 0,
    j: 0,
  }
}

// commit, state를 변경
export const mutations = {
  // 질문에 응답을 했을 때, 저장되도록 반영한다.
  SET_USER_TYPE(state, type) {
    state.result[type] += 1;
    state.page += 1;
  },
  PAGE_RESET(state) {
    state.page = 0;
    state.result = {
      e: 0,
      i: 0,
      s: 0,
      n: 0,
      t: 0,
      f: 0,
      p: 0,
      j: 0,
    }
  }
}

// action
export const actions = {
  clickButton ({commit}, type) {
    commit("SET_USER_TYPE", type)
  },
  clickResetButton({commit}) {
    commit("PAGE_RESET")
  }
} 