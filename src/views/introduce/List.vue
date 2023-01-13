<template>
    <div>
        <h2>Introduce</h2>

        <div v-if="!isEmpty">
            <v-card class="intro-card-section" elevation="2">
                <div>이미지</div>

                <div>
                    <span> 이름 </span>
                </div>
            </v-card>

            <v-card class="intro-card-section" elevation="2">
                <div>이미지</div>

                <div>
                    <span> 이름 </span>
                </div></v-card
            >

            <v-card class="intro-card-section" elevation="2"
                ><div>이미지</div>

                <div>
                    <span> 이름 </span>
                </div></v-card
            >
        </div>

        <v-data-table
            :headers="headers"
            :items="introduceList"
            :items-per-page="5"
            :loading="loading"
            :loading-text="`Loading..`"
            class="elevation-1 list-data"
        >
            <template v-slot:[`item.is_best`]="{ item }">
                <v-chip v-if="item.is_best" dark />
                <span v-else></span>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: "IntroduceList",
    components: {},
    data() {
        return {
            loading: false,
            // 사용자가 등록한 자기소개 데이터들의 목록
            introduceList: [
                {
                    id: 1,
                    title: "프론트엔드 자기소개서",
                    created_at: "2022-10-11",
                    updated_at: "2022-10-11",
                    is_best: false
                },
                {
                    id: 2,
                    title: "프론트엔드 자기소개서2",
                    created_at: "2022-10-14",
                    updated_at: "2022-12-22",
                    is_best: true
                },
                {
                    id: 3,
                    title: "프론트엔드 자기소개서3",
                    created_at: "2023-01-02",
                    updated_at: "2023-01-04",
                    is_best: false
                },
                {
                    id: 4,
                    title: "프론트엔드 자기소개서4",
                    created_at: "2023-01-03",
                    updated_at: "2023-01-03",
                    is_best: false
                },
                {
                    id: 5,
                    title: "프론트엔드 자기소개서5",
                    created_at: "2023-01-09",
                    updated_at: "2023-01-10",
                    is_best: false
                },
                {
                    id: 6,
                    title: "프론트엔드 자기소개서6",
                    created_at: "2023-01-11",
                    updated_at: "2023-01-11",
                    is_best: false
                }
            ],
            // 자기소개 데이터들 중 노출을 원하는 데이터 (사용자가 선택)
            bestData: {},
            // 사용자의 DB에 자기소개 데이터가 없음을 구분하는 Boolean 값
            isEmpty: true,
            headers: [
                {
                    text: "No.",
                    align: "start",
                    sortable: false,
                    value: "id",
                    width: 100
                },
                { text: "제목", value: "title", width: 800 },
                { text: "등록일", value: "created_at", width: 200 },
                { text: "수정일", value: "updated_at", width: 200 },
                { text: "대표 데이터", value: "is_best", width: 200 }
            ]
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

                for (let i = 0; i < this.introduceList.length; i++) {
                    // 대표 데이터로 설정된 데이터 캐스팅
                    if (this.introduceList[i].is_best) {
                        Object.assign(
                            this.bestData,
                            this.introduceList[i].is_best
                        );
                        this.isEmpty = false;
                        break;
                    }
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style scoped>
.intro-card-section {
    padding: 10px;
    margin-bottom: 50px;
}

.list-data {
    text-align: center;
}
</style>
