using FirebaseAuth.Core.Repositories;

namespace FirebaseAuth.Core
{
    public interface IUnitOfWork
    {
        IFirebaseDB FirebaseDB { get; }
    }
}
