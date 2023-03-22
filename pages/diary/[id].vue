<template>
	<div>
		id:{{ $route.params.id }} 일기 페이지<br/>

		content: <br/>
		{{ diary.detailContent }}

	</div>
</template>


<script>
import { computed, ref } from "vue";
import { useDiaryStore } from '../../store/diary';

definePageMeta({
	validate: async (route) => {
		// Check if the id is made up of digits
		console.log('validation', /^\d+$/.test(route.params.id))
		return /^\d+$/.test(route.params.id)
	}
})


// export default defineComponent({
export default {
	setup() {
		const diary = useDiaryStore();
		const diaryContent = ref({});

		function getDiaryContent() {
			diaryContent.value = diary.detailContent
		}

		return {diary, diaryContent, getDiaryContent}
	}
}
</script>