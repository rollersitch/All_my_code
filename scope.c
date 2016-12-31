#include <stdio.h>

int f() {
    if(1) {
      int i = 4;
    }

    return i;
}


int main() {
	printf("%d\n",f());
	return 0;
}
