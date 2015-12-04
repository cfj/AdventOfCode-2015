using System;
using System.Text;
using System.Security.Cryptography;

class Program
{
    const string secret = "bgvyzdsv";

    static void Main(string[] args)
    {
        int numZeros = 5;

        Console.WriteLine("Saw {0} leading zeros at {1}", numZeros, GetLowestNumber(secret, numZeros));
    }

    public static int GetLowestNumber(string input, int difficulty)
    {
        int num = 1;
        string target = new string('0', difficulty);

        while (!ComputeMd5Hash(String.Format("{0}{1}", input, num)).Substring(0, difficulty).Equals(target))
        {
            num++;
        }

        return num;
    }

    public static string ComputeMd5Hash(string input)
    {
        MD5 md5 = MD5.Create();
        byte[] inputBytes = Encoding.ASCII.GetBytes(input);
        byte[] hash = md5.ComputeHash(inputBytes);

        var sb = new StringBuilder();

        for (int i = 0; i < 3; i++)
        {
            sb.Append(hash[i].ToString("X2"));
        }

        return sb.ToString();
    }
}