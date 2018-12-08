using FirebaseAuthExample.Firebase;

namespace FirebaseAuthExample.Core.Repositories
{
    public interface IFirebaseDB
    {
        FirebaseResponse Put(string jsonData);
        FirebaseDB Node(string node);
    }
}
