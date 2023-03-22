import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useDiaryStore = defineStore('diary', () => {
	const list = ref([]);
	const detailContent = ref({text:'hello'});
	
	function addList(newDiary) {
		list.value.push(newDiary);
	}
	function setDetailContent(id) {
		this.detailContent = this.list.filter(diary => diary.id === id);
	}
	
	const getLikeList = computed(() => list.filter(diary => diary.like === true))

	return {list, detailContent, addList, setDetailContent, getLikeList}
	
})
