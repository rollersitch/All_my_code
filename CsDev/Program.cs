using System;

namespace CsDev
{
    public delegate void MyGenericDelegate<T>(T arg);

    public class Program
    {
        static void Main(string[] args) {
            MyGenericDelegate<string> strTarget = new MyGenericDelegate<string>(StringTarget);

            strTarget("Some string data");

            MyGenericDelegate<int> intTarget = new MyGenericDelegate<int>(IntTarget);

            intTarget(9);
        }

        public static void StringTarget(string arg) {
            Console.WriteLine($"arg in uppercase: {arg.ToUpper()}");
        }
        public static void IntTarget(int arg) {
            Console.WriteLine($"++ arg is : {++arg}");
        }
    }
}
