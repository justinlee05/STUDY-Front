#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
#include <Windows.h>
struct GM {
	char name[10];
	int num;
	int score;
}manage[21];
char tempname[10];
int i = 1, temp1, tempnum;
void Wrong() {
	system("cls");
	getchar();
	printf("잘못된 입력입니다.");
}
int Begin() {
	int temp;
	printf("[그린마일리지 관리 프로그램]\n수행하실 작업을 선택해주세요.\n1.등록 2.수정 3.검색 4.출력 5.종료\n입력:");
	scanf("%d", &temp);
	system("cls");
	return temp;
}
void Input(struct GM* p) {
	while (1) {
		printf("정보를 등록하시겠습니까?\n(1 입력시 확인, 0 입력시 취소)\n입력:");
		scanf("%d", &tempnum);
		switch (tempnum) {
		case 1: {
			system("cls");
			printf("등록하실 정보를 입력해주세요.\n");
			printf("이름을 입력해주세요:");
			scanf("%s", tempname);
			strcpy(p[i].name, tempname);
			getchar();
			printf("번호를 입력해주세요:");
			scanf("%d", &p[i].num);
			getchar();
			printf("점수를 입력해주세요:");
			scanf("%d", &p[i].score);
			getchar();
			printf("%d번에 정보가 입력되었습니다.", i);
			i++;
			break;
		}
		case 0: {
			system("cls");
			return;
		}
		default: {
			Wrong();
			continue;
		}
		}
		return;
	}
}
void Fix() {
	while (1) {
		if (i != 1) {}
		else
		{
			system("cls");
			printf("수정 가능한 정보가 없습니다.\n");
			return;
		}
		printf("정보를 수정하시겠습니까?\n(1 입력시 수정, 0 입력시 취소)\n입력 :");
		scanf("%d", &temp1);
		switch (temp1) {
		case 1: {
				system("cls");
			while (1) {
				printf("수정할 정보의 번호를 입력해주세요.");
				printf("(수정 가능한 정보의 번호 : %d ~ %d)\n입력 :", 1, i - 1);
				scanf("%d", &tempnum);
				if (tempnum >= 1 && tempnum <= 20)
					break;
				else
					system("cls");
					printf("잘못된 입력입니다.");
			}
				system("cls");
			while (1)
			{
				printf("수정할 정보를 선택해주세요.\n1.이름 2.번호 3.점수 4.취소\n입력:");
				scanf("%d", &temp1);
				system("cls");
				switch (temp1) {
				case 1: {
					printf("수정할 내용(이름)을 입력하세요.\n입력:");
					scanf("%s", tempname);
					strcpy(manage[tempnum].name, tempname);
					system("cls");
					printf("성공적으로 수정되었습니다!");
					break;
				}
				case 2: {
					printf("수정할 내용(번호)을 입력하세요.\n입력:");
					scanf("%d", &temp1);
					manage[tempnum].num = temp1;
					system("cls");
					printf("성공적으로 수정되었습니다!");
					break;
				}
				case 3: {
					printf("수정할 내용(점수)을 입력하세요.\n입력:");
					scanf("%d", &temp1);
					manage[tempnum].score = temp1;
					system("cls");
					printf("성공적으로 수정되었습니다!");
					break;
				}
				case 4: {
					return;
				}
				default:
					Wrong();
					continue;
				}
				break;
			}
			break;
		}
		case 0: {
			system("cls");
			return;
		}
		default: {
			Wrong();
			continue;
		}
		}
		Fix();
		return;
	}
}
void Search() {
	while (1) {
		printf("검색할 정보를 선택하세요.\n1.이름 2.번호 3.점수 4.종료\n입력:");
		scanf("%d", &temp1);
		system("cls");
		switch (temp1) {
		case 1: {
			printf("검색할 이름을 입력하세요.\n입력:");
			scanf("%s", tempname);
			system("cls");
			printf("검색결과와 유사한 정보는 다음과 같습니다.\n");
			for (int i = 1; i <= 20; i++) {
				if ((manage[i].name[0] == tempname[0] &&
					manage[i].name[0] != NULL) || (manage[i].name[1] == tempname[1] && manage[i].name[1] != NULL) ||
					(manage[i].name[2] == tempname[2] && manage[i].name[2] != NULL))
					PrintResult(i);
			}
			break;
		}
		case 2: {
			printf("검색할 번호를 입력하세요.\n입력:");
			scanf("%d", &temp1);
			system("cls");
			printf("검색결과와 일치하는 정보는 다음과 같습니다.\n");
			for (int i = 1; i <= 20; i++) {
				if (manage[i].num == temp1)
					PrintResult(i);
			}
			break;
		}
		case 3: {
			printf("검색할 점수를 입력하세요.\n입력:");
			scanf("%d", &temp1);
			system("cls");
			printf("검색결과와 일치하는 정보는 다음과 같습니다.\n");
			for (int i = 1; i <= 20; i++) {
				if (manage[i].num == temp1)
					PrintResult(i);

			}
			break;
		}
		case 4: {
			return;
		}
		default: {
			Wrong();
			continue;
		}
		}
		return;
	}
}
void Print() {
	while (1) {
		printf("출력할 정보의 번호를 입력하세요. \n(0 입력시 취소)\n (입력된 정보의 갯수 :%d)\n입력:", i - 1);

		scanf("%d", &tempnum);
		if (tempnum < i && tempnum>0) {
			getchar();
			system("cls");
			printf("%d번 정보 :\n이름 : %s\n번호 : %d\n점수 : %d\n", tempnum, manage[tempnum].name, manage[tempnum].num, manage[tempnum].score);
			break;
		}
		else if (tempnum == 0) {
			system("cls");
			return;
		}
		else
		{
			Wrong();
			continue;
		}
	}
}
int PrintResult(int num) {
	printf("%d번 정보 :\n이름 : %s\n번호 : %d\n점수 : %d\n", num, manage[num].name, manage[num].num, manage[num].score);
	return 0;
}
void Start() {
	while (1) {
		temp1 = Begin();
		switch (temp1) {
		case 1: {
			Input(manage);
			break;

		}
		case 2: {
			Fix();
			break; }
		case 3: {
			Search();
			break; }
		case 4: {
			Print();
			break; }
		case 5: {
			return; }
		default: {
			Wrong();
			continue; }
		}
	}
}
int main() { Start(); }