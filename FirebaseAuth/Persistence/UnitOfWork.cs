using FirebaseAuthExample.Core;
using FirebaseAuthExample.Core.Repositories;
using FirebaseAuthExample.Firebase;

namespace FirebaseAuthExample.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        public IFirebaseDB FirebaseDB { get; private set; }

        public UnitOfWork()
        {
            FirebaseDB = new FirebaseDB("https://parli-parrot.firebaseio.com/");
        }
    }
}
