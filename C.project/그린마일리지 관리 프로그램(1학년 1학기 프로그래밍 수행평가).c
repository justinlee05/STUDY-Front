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
	printf("�߸��� �Է��Դϴ�.");
}
int Begin() {
	int temp;
	printf("[�׸����ϸ��� ���� ���α׷�]\n�����Ͻ� �۾��� �������ּ���.\n1.��� 2.���� 3.�˻� 4.��� 5.����\n�Է�:");
	scanf("%d", &temp);
	system("cls");
	return temp;
}
void Input(struct GM* p) {
	while (1) {
		printf("������ ����Ͻðڽ��ϱ�?\n(1 �Է½� Ȯ��, 0 �Է½� ���)\n�Է�:");
		scanf("%d", &tempnum);
		switch (tempnum) {
		case 1: {
			system("cls");
			printf("����Ͻ� ������ �Է����ּ���.\n");
			printf("�̸��� �Է����ּ���:");
			scanf("%s", tempname);
			strcpy(p[i].name, tempname);
			getchar();
			printf("��ȣ�� �Է����ּ���:");
			scanf("%d", &p[i].num);
			getchar();
			printf("������ �Է����ּ���:");
			scanf("%d", &p[i].score);
			getchar();
			printf("%d���� ������ �ԷµǾ����ϴ�.", i);
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
			printf("���� ������ ������ �����ϴ�.\n");
			return;
		}
		printf("������ �����Ͻðڽ��ϱ�?\n(1 �Է½� ����, 0 �Է½� ���)\n�Է� :");
		scanf("%d", &temp1);
		switch (temp1) {
		case 1: {
				system("cls");
			while (1) {
				printf("������ ������ ��ȣ�� �Է����ּ���.");
				printf("(���� ������ ������ ��ȣ : %d ~ %d)\n�Է� :", 1, i - 1);
				scanf("%d", &tempnum);
				if (tempnum >= 1 && tempnum <= 20)
					break;
				else
					system("cls");
					printf("�߸��� �Է��Դϴ�.");
			}
				system("cls");
			while (1)
			{
				printf("������ ������ �������ּ���.\n1.�̸� 2.��ȣ 3.���� 4.���\n�Է�:");
				scanf("%d", &temp1);
				system("cls");
				switch (temp1) {
				case 1: {
					printf("������ ����(�̸�)�� �Է��ϼ���.\n�Է�:");
					scanf("%s", tempname);
					strcpy(manage[tempnum].name, tempname);
					system("cls");
					printf("���������� �����Ǿ����ϴ�!");
					break;
				}
				case 2: {
					printf("������ ����(��ȣ)�� �Է��ϼ���.\n�Է�:");
					scanf("%d", &temp1);
					manage[tempnum].num = temp1;
					system("cls");
					printf("���������� �����Ǿ����ϴ�!");
					break;
				}
				case 3: {
					printf("������ ����(����)�� �Է��ϼ���.\n�Է�:");
					scanf("%d", &temp1);
					manage[tempnum].score = temp1;
					system("cls");
					printf("���������� �����Ǿ����ϴ�!");
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
		printf("�˻��� ������ �����ϼ���.\n1.�̸� 2.��ȣ 3.���� 4.����\n�Է�:");
		scanf("%d", &temp1);
		system("cls");
		switch (temp1) {
		case 1: {
			printf("�˻��� �̸��� �Է��ϼ���.\n�Է�:");
			scanf("%s", tempname);
			system("cls");
			printf("�˻������ ������ ������ ������ �����ϴ�.\n");
			for (int i = 1; i <= 20; i++) {
				if ((manage[i].name[0] == tempname[0] &&
					manage[i].name[0] != NULL) || (manage[i].name[1] == tempname[1] && manage[i].name[1] != NULL) ||
					(manage[i].name[2] == tempname[2] && manage[i].name[2] != NULL))
					PrintResult(i);
			}
			break;
		}
		case 2: {
			printf("�˻��� ��ȣ�� �Է��ϼ���.\n�Է�:");
			scanf("%d", &temp1);
			system("cls");
			printf("�˻������ ��ġ�ϴ� ������ ������ �����ϴ�.\n");
			for (int i = 1; i <= 20; i++) {
				if (manage[i].num == temp1)
					PrintResult(i);
			}
			break;
		}
		case 3: {
			printf("�˻��� ������ �Է��ϼ���.\n�Է�:");
			scanf("%d", &temp1);
			system("cls");
			printf("�˻������ ��ġ�ϴ� ������ ������ �����ϴ�.\n");
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
		printf("����� ������ ��ȣ�� �Է��ϼ���. \n(0 �Է½� ���)\n (�Էµ� ������ ���� :%d)\n�Է�:", i - 1);

		scanf("%d", &tempnum);
		if (tempnum < i && tempnum>0) {
			getchar();
			system("cls");
			printf("%d�� ���� :\n�̸� : %s\n��ȣ : %d\n���� : %d\n", tempnum, manage[tempnum].name, manage[tempnum].num, manage[tempnum].score);
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
	printf("%d�� ���� :\n�̸� : %s\n��ȣ : %d\n���� : %d\n", num, manage[num].name, manage[num].num, manage[num].score);
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