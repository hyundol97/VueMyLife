<template>
    <div v-loading="loading">
        <div>Introduce</div>

        <v-data-table
            :headers="headers"
            :items="introduceList"
            :items-per-page="5"
            :loading="loading"
            :loading-text="`Loading..`"
            class="elevation-1 list-data"
        >
            <template v-slot:item.is_best="{ item }">
                <v-chip :color="getColor(item.is_best)" dark>
                    {{ item.is_best }}
                </v-chip>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'IntroduceList',
    components: {},
    data() {
        return {
            loading: false,
            // 사용자가 등록한 자기소개 데이터들의 목록
            introduceList: [
                {
                    id: 1,
                    title: '프론트엔드 자기소개서',
                    created_at: '2022-10-11',
                    updated_at: '2022-10-11',
                    is_best: false,
                },
            ],
            // 자기소개 데이터들 중 노출을 원하는 데이터 (사용자가 선택)
            bestData: {},
            // 사용자의 DB에 자기소개 데이터가 없음을 구분하는 Boolean 값
            isEmpty: false,
            headers: [
                {
                    text: 'No.',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                    width: 100,
                },
                { text: '제목', value: 'title', width: 800 },
                { text: '등록일', value: 'created_at', width: 200 },
                { text: '수정일', value: 'updated_at', width: 200 },
                { text: '대표 데이터', value: 'is_best', width: 200 },
            ],
        };
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            try {
                this.loading = true;
                // const result = await api.list();

                // if (result.data) {
                //   this.introduceList = result.data;
                // } else {
                //   this.isEmpty = true;
                // }
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.list-data {
    text-align: center;
}
</style>
